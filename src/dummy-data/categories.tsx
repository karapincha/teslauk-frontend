import React from 'react'
import {
  Beaker,
  ChartLine,
  ColdTemperature,
  DisinfectingWipes,
  Flask,
  LiquidBottle,
  Microscope,
  Monitor,
  OpticalMicroscope,
  PieChart,
  PpeGoggles,
  SanitizerSpray,
  TestTube,
  VirusResearch,
  WaterSanitation,
  WurtzFlask,
} from '@/icons'

export const categories = [
  {
    id: 0,
    label: 'Cleanroom',
    onClick: () => {},
    icon: <DisinfectingWipes />,
  },
  {
    id: 1,
    label: 'Cleaning and sterilization',
    onClick: () => {},
    icon: <WaterSanitation />,
  },
  {
    id: 2,
    label: 'Heating an cooling technology',
    onClick: () => {},
    icon: <ColdTemperature />,
  },
  {
    id: 3,
    label: 'Analytical measurements',
    onClick: () => {},
    icon: <PieChart />,
  },
  {
    id: 4,
    label: 'Chromatography',
    onClick: () => {},
    icon: <ChartLine />,
  },
  {
    id: 5,
    label: 'Cleanroom, Cleaning and sterilisation',
    onClick: () => {},
    icon: <SanitizerSpray />,
  },
  {
    id: 6,
    label: 'Distillation, separation, filtration',
    onClick: () => {},
    icon: <WurtzFlask />,
  },
  {
    id: 7,
    label: 'Soil, water, food analysis',
    onClick: () => {},
    icon: <VirusResearch />,
  },
  {
    id: 8,
    label: 'General lab consumables',
    onClick: () => {},
    icon: <Microscope />,
  },
  {
    id: 9,
    label: 'Life sciences',
    onClick: () => {},
    icon: <Flask />,
  },
  {
    id: 10,
    label: 'Liquid handling',
    onClick: () => {},
    icon: <LiquidBottle />,
  },
  {
    id: 11,
    label: 'Occupational safety, Security',
    onClick: () => {},
    icon: <PpeGoggles />,
  },
  {
    id: 12,
    label: 'Optical instruments ',
    onClick: () => {},
    icon: <OpticalMicroscope />,
  },
  {
    id: 13,
    label: 'Sample preparation',
    onClick: () => {},
    icon: <TestTube />,
  },
  {
    id: 14,
    label: 'Stirring, Shaking, Mixing',
    onClick: () => {},
    icon: <Beaker />,
  },
  {
    id: 15,
    label: 'Vacuum technology',
    onClick: () => {},
    icon: <Monitor />,
  },
]
