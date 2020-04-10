export interface BeforeInstallPromptEvent extends Event {
  readonly platforms: Array<string>;
  readonly userChoice: Promise<UserChoice>;
  prompt(): Promise<void>;
}

export interface UserChoice {
  outcome: 'accepted' | 'dismissed';
  platform: string;
}
