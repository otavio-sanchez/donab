const DEFAULT_MAINTENANCE_MODE = true;

export async function getMaintenanceMode(): Promise<boolean> {
  const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
  const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
  if (!projectId || !apiKey) return DEFAULT_MAINTENANCE_MODE;

  try {
    const url = `https://firestore.googleapis.com/v1/projects/${projectId}/databases/(default)/documents/stores/donab?key=${encodeURIComponent(apiKey)}`;
    const response = await fetch(url, { cache: "no-store", signal: AbortSignal.timeout(5000) });
    if (!response.ok) return DEFAULT_MAINTENANCE_MODE;
    const document = await response.json() as { fields?: { maintenanceMode?: { booleanValue?: boolean } } };
    return document.fields?.maintenanceMode?.booleanValue ?? DEFAULT_MAINTENANCE_MODE;
  } catch {
    return DEFAULT_MAINTENANCE_MODE;
  }
}
