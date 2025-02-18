import { generateUUID } from '~/utils'

export default function getDeviceId() {
  const deviceId = useCookie("device_id");
  if (!deviceId.value) {
    deviceId.value = generateUUID();
  }
  return deviceId.value;
}
