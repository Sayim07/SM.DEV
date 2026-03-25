"use client";

import { Component } from "@/components/ui/desert-drift";

interface SplashScreenProps {
  onEnter: () => void;
}

export default function SplashScreen({ onEnter }: SplashScreenProps) {
  return <Component onEnter={onEnter} />;
}
