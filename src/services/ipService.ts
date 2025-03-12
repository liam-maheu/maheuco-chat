export interface IPInfo {
  ip: string;
  city?: string;
  region?: string;
  country?: string;
  loc?: string;
  org?: string;
  postal?: string;
  timezone?: string;
}

export async function getIPInfo(): Promise<IPInfo> {
  try {
    const response = await fetch('https://ipinfo.io/json');
    if (!response.ok) {
      throw new Error('Failed to fetch IP info');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching IP info:', error);
    return {
      ip: '127.0.0.1',
      city: 'UNKNOWN',
      region: 'RESTRICTED',
      country: 'RESTRICTED',
      timezone: 'UTC'
    };
  }
} 