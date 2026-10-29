import { NextResponse } from "next/server";

// In-memory sync store (survives requests in production container)
const syncStore = new Map<string, { data: any; updatedAt: number }>();

function generateSyncCode(): string {
  const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  let code = "";
  for (let i = 0; i < 6; i++) {
    code += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return code;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    let code = body.code ? String(body.code).trim().toUpperCase() : "";

    if (!code || code.length < 4) {
      code = generateSyncCode();
    }

    syncStore.set(code, {
      data: body.payload || body,
      updatedAt: Date.now(),
    });

    // Cleanup codes older than 30 days
    const thirtyDaysAgo = Date.now() - 30 * 24 * 60 * 60 * 1000;
    for (const [k, v] of syncStore.entries()) {
      if (v.updatedAt < thirtyDaysAgo) {
        syncStore.delete(k);
      }
    }

    return NextResponse.json({ success: true, code });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to save cloud sync" },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const code = searchParams.get("code")?.trim().toUpperCase();

    if (!code) {
      return NextResponse.json(
        { success: false, error: "Missing sync code" },
        { status: 400 }
      );
    }

    const item = syncStore.get(code);
    if (!item) {
      return NextResponse.json(
        { success: false, error: "Sync code not found or expired" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, payload: item.data });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err.message || "Failed to fetch cloud sync" },
      { status: 500 }
    );
  }
}
