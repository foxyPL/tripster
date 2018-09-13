export class MockAngulartics2AppInsightsExtended {
  setUsername(userId: string): void {}

  setUserProperties(properties: Partial<{ userId: string; accountId: string }>) {}

  clearAuthenticatedUserContext() {}
}
