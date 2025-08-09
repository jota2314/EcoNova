export type DataLayerEvent = Record<string, unknown>;

export function pushDataLayer(event: DataLayerEvent): void {
  const w = window as unknown as { dataLayer?: DataLayerEvent[] };
  if (!w.dataLayer) w.dataLayer = [];
  w.dataLayer.push(event);
}

