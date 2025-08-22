
// Project State Configuration
// This file controls which features are active/inactive to maintain the desired state

export interface ProjectConfig {
  hero: {
    showMainContent: boolean;
    showCallToAction: boolean;
    showStatistics: boolean;
  };
  whatsapp: {
    useCustomIcon: boolean;
    customIconPath?: string;
  };
  header: {
    showTopBar: boolean;
    enableStickyBehavior: boolean;
  };
  sections: {
    about: boolean;
    services: boolean;
    contact: boolean;
  };
}

// Current project state - DO NOT MODIFY without explicit user request
export const PROJECT_STATE: ProjectConfig = {
  hero: {
    showMainContent: false, // Intentionally empty - content was removed
    showCallToAction: false,
    showStatistics: false,
  },
  whatsapp: {
    useCustomIcon: false, // Reverted to default MessageCircle icon
    customIconPath: undefined,
  },
  header: {
    showTopBar: true,
    enableStickyBehavior: true,
  },
  sections: {
    about: true,
    services: true,
    contact: true,
  },
};

// Helper function to check if a feature is enabled
export const isFeatureEnabled = (feature: string, subFeature?: string): boolean => {
  const keys = feature.split('.');
  let current: any = PROJECT_STATE;
  
  for (const key of keys) {
    current = current[key];
  }
  
  if (subFeature) {
    return current[subFeature];
  }
  
  return current;
};
