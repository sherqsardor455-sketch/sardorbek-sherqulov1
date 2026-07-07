/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  fullDetails: string;
}

export interface TimelineItem {
  id: string;
  year: string;
  title: string;
  subtitle: string;
  description: string;
  type: 'education' | 'experience';
}

export interface SkillItem {
  name: string;
  percentage: number;
}

export interface SoftSkillItem {
  id: string;
  title: string;
  description: string;
  iconName: 'Users' | 'Lightbulb' | 'Clock' | 'Languages';
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: string;
}
