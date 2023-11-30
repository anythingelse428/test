export default function useIcoByDeviceType (type:string) {
  if (!type) { return }
  if (type.includes('devices.types.sensor')) {
    return { name: 'access-point', code: "\\F0003" }
  }
  switch (type) {
    case 'devices.types.switch':
      return { name: 'power-plug-outline', code: '\\F1425' }
    case 'devices.types.openable.lock':
      return { name: 'lock-outline', code: '\\F0341' }
    case 'devices.types.light':
      return { name: 'lightbulb-variant-outline', code: '\\F1803' }
    case 'devices.types.thermostat':
      return { name: 'home-thermometer-outline', code: '\\F0F55' }
    case 'devices.types.openable.valve':
      return { name: 'water-outline', code: '\\F0E0A' }
    default:
      return { name: 'block-helper', code: '\\F00AD' }
  }
}
