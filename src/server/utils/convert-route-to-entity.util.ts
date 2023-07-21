const mapping: Record<string, string> = {
  organizations: 'organization',
  users: 'user',
  'valorant-data': 'valorant_data',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
