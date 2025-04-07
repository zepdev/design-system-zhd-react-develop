import type { Meta, StoryObj } from '@storybook/react';
import { USPList } from './UspList';
import { USPListProps } from './usp-list.interface';

const meta = {
  title: 'Patterns/USPList',
  component: USPList,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof USPList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [
      {
        headline: 'Nachhaltig managen',
        count: '1.',
        description:
          'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.',
      },
      {
        headline: 'Alle Daten auf einen Blick',
        count: '2.',
        description:
          'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.',
      },
    ],
  } as USPListProps,
};

export const With3Items: Story = {
  args: {
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [
      {
        headline: 'Nachhaltig managen',
        count: '1.',
        description:
          'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.',
      },
      {
        headline: 'Alle Daten auf einen Blick',
        count: '2.',
        description:
          'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.',
      },
      {
        headline: 'Ausfälle frühzeitig erkennen',
        count: '3.',
        description:
          'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.',
      },
    ],
  } as USPListProps,
};

export const With4Items: Story = {
  args: {
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [
      {
        headline: 'Nachhaltig managen',
        count: '1.',
        description:
          'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.',
      },
      {
        headline: 'Alle Daten auf einen Blick',
        count: '2.',
        description:
          'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.',
      },
      {
        headline: 'Ausfälle frühzeitig erkennen',
        count: '3.',
        description:
          'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.',
      },
      {
        headline: 'Datenspeicherung in Deutschland',
        count: '4.',
        description:
          'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.',
      },
    ],
  } as USPListProps,
};

export const With5Items: Story = {
  args: {
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [
      {
        headline: 'Nachhaltig managen',
        count: '1.',
        description:
          'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.',
      },
      {
        headline: 'Alle Daten auf einen Blick',
        count: '2.',
        description:
          'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.',
      },
      {
        headline: 'Ausfälle frühzeitig erkennen',
        count: '3.',
        description:
          'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.',
      },
      {
        headline: 'Datenspeicherung in Deutschland',
        count: '4.',
        description:
          'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.',
      },
      {
        headline: 'Einfache Integration',
        count: '5.',
        description:
          'Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden.',
      },
    ],
  } as USPListProps,
};

export const With6Items: Story = {
  args: {
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [
      {
        headline: 'Nachhaltig managen',
        count: '1.',
        description:
          'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.',
      },
      {
        headline: 'Alle Daten auf einen Blick',
        count: '2.',
        description:
          'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.',
      },
      {
        headline: 'Ausfälle frühzeitig erkennen',
        count: '3.',
        description:
          'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.',
      },
      {
        headline: 'Datenspeicherung in Deutschland',
        count: '4.',
        description:
          'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.',
      },
      {
        headline: 'Einfache Integration',
        count: '5.',
        description:
          'Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden.',
      },
      {
        headline: 'Maßsgeschneiderte Lösungen',
        count: '6.',
        description:
          'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.',
      },
    ],
  } as USPListProps,
};

export const With10Items: Story = {
  args: {
    headerTitle: 'Vorteile für Ihr Unternehmen',
    uspCards: [
      {
        headline: 'Nachhaltig managen',
        count: '1.',
        description:
          'Mit AEC können Sie den Zustand Ihrer Anlagen kontinuierlich analysieren und Optimierungspotenziale identifizieren, um eine ressourcenschonende Betriebsweise zu gewährleisten. Sie können die Lebensdauer Ihrer Motoren und Anlagen verlängern sowie die Emissionen und den Kraftstoffverbrauch senken.',
      },
      {
        headline: 'Alle Daten auf einen Blick',
        count: '2.',
        description:
          'AEC vernetzt Ihre Motoren nahtlos und bietet einen umfassenden Überblick über alle relevanten Parameter Ihrer Motoren und Anlagen. Von Betriebsdaten bis hin zu Leistungsindikatoren können Sie alle gewünschten Informationen in einem zentralen Portal einsehen. Dies vereinfacht das Management Ihrer Flotte, Sie können  Handlungsempfehlungen aus den Daten ableiten und die Effizienz Ihres Betriebs steigern.',
      },
      {
        headline: 'Ausfälle frühzeitig erkennen',
        count: '3.',
        description:
          'Durch die kontinuierliche Überwachung Ihrer Anlage, erkennen Sie potenzielle Ausfälle frühzeitig und können geeignete Maßnahmen zur Vermeidung von Betriebsunterbrechungen ergreifen. Durch den Zugriff auf Echtzeitdaten und Warnmeldungen können Sie proaktiv auf Probleme reagieren und die Zuverlässigkeit Ihrer Anlagen erhöhen.',
      },
      {
        headline: 'Datenspeicherung in Deutschland',
        count: '4.',
        description:
          'Ihre Daten werden in Deutschland gespeichert und verarbeitet. Dies gewährleistet nicht nur die Einhaltung strenger Datenschutzgesetze, sondern bietet auch Sicherheit für unsere Kunden. Durch die lokale Speicherung können sensible Daten in einer vertrauenswürdigen Umgebung gehalten werden, was die Risiken von Datenverlust und unbefugtem Zugriff minimiert.',
      },
      {
        headline: 'Einfache Integration',
        count: '5.',
        description:
          'Dank Plug-and-Play-Funktionalität lässt sich AEC unkompliziert in Ihre Flotte integrieren. Die Hardware beansprucht nur wenig Platz und kann extrem leicht montiert und installiert werden.',
      },
      {
        headline: 'Maßsgeschneiderte Lösungen',
        count: '6.',
        description:
          'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.',
      },
      {
        headline: 'Maßsgeschneiderte Lösungen',
        count: '7.',
        description:
          'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.',
      },
      {
        headline: 'Maßsgeschneiderte Lösungen',
        count: '8.',
        description:
          'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.',
      },
      {
        headline: 'Maßsgeschneiderte Lösungen',
        count: '9.',
        description:
          'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.',
      },
      {
        headline: 'Maßsgeschneiderte Lösungen',
        count: '10.',
        description:
          'Zusätzliche Umgebungsparameter, komplexe Messwerte, Erweiterung durch Tracker & Sensorik, eigenes Branding - Wir passen AEC exakt an Ihre Bedürfnisse an und können individuelle Konfigurationen und Weiterentwicklungen vornehmen.',
      },
    ],
  } as USPListProps,
};
