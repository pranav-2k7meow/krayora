import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface ServiceFeature {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}