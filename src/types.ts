export interface ChurchInfo {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  mission: string;
  website: string;
}

export interface ClergyMember {
  id: string;
  name: string;
  title: string;
  role: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  name: string;
  day: string;
  time: string;
  description: string;
}

export interface Ministry {
  id: string;
  name: string;
  description: string;
  audience: "youth" | "adults" | "families" | "all";
  image: string;
  contact?: string;
}

export interface Sacrament {
  id: string;
  name: string;
  description: string;
  icon: string;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  description: string;
  location: string;
}

export interface NavItem {
  label: string;
  path: string;
}
