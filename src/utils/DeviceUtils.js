import MobileIconImage from '../../statics/images/devices/mobile-icon.png';
import DesktopIconImage from '../../statics/images/devices/desktop-icon.png';
import EmbeddedIconImage from '../../statics/images/devices/embedded-icon.png';

import TiltIconImage from '../../statics/images/sensors/Tilt.png'
import LightIconImage from '../../statics/images/sensors/Light.png'
import CompassIconImage from '../../statics/images/sensors/Compass.png'
import RotationIconImage from '../../statics/images/sensors/Rotation.png'
import ProximityIconImage from '../../statics/images/sensors/Proximity.png'
import GyroscopeIconImage from '../../statics/images/sensors/Gyroscope.png'
import OrientationIconImage from '../../statics/images/sensors/Orientation.png'
import AmbientLightIconImage from '../../statics/images/sensors/AmbientLight.png'
import MagnetometerIconImage from '../../statics/images/sensors/Magnetometer.png'
import AccelerometerIconImage from '../../statics/images/sensors/Accelerometer.png';


export const DeviceTypes = {
  MOBILE: 'MOBILE',
  DESKTOP: 'DESKTOP',
  EMBEDDED: 'EMBEDDED'
};

export const SensorType = {
  TILT: 'Tilt',
  LIGHT: 'Light',
  COMPASS: 'Compass',
  ROTATION: 'Rotation',
  PROXIMITY: 'Proximity',
  GYROSCOPE: 'Gyroscope',
  ORIENTATION: 'Orientation',
  AMBIENTLIGHT: 'AmbientLight',
  MAGNETOMETER: 'Magnetometer',
  ACCELEROMETER: 'Accelerometer'
};

export const sourceImageByDevice = (type) => {
  switch (type) {
    case DeviceTypes.MOBILE: return MobileIconImage;
    case DeviceTypes.DESKTOP: return DesktopIconImage;
    case DeviceTypes.EMBEDDED: return EmbeddedIconImage;
  }
};

export const colorsByDevice = (type) => {
  switch (type) {
    case DeviceTypes.MOBILE: return '#e5d7a8';
    case DeviceTypes.DESKTOP: return '#c3d88a';
    case DeviceTypes.EMBEDDED: return '#b9e5da';
  }
};

export const sourceImageBySensor = (type) => {
  switch (type) {
    case SensorType.TILT: return TiltIconImage;
    case SensorType.LIGHT: return LightIconImage;
    case SensorType.COMPASS: return CompassIconImage;
    case SensorType.ROTATION: return RotationIconImage;
    case SensorType.PROXIMITY: return ProximityIconImage;
    case SensorType.GYROSCOPE: return GyroscopeIconImage;
    case SensorType.ORIENTATION: return OrientationIconImage;
    case SensorType.AMBIENTLIGHT: return AmbientLightIconImage;
    case SensorType.MAGNETOMETER: return MagnetometerIconImage;
    case SensorType.ACCELEROMETER: return AccelerometerIconImage;
  }
};
