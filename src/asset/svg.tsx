import {View, StyleProp, ViewStyle} from 'react-native';
import {Svg, Path} from 'react-native-svg';
import EmailIcon from './Email';
import GoogleIcon from './Google';
import AppleIcon from './Apple';
import Person from './Person';
import Search from './Search';
import Comment from './Comment';
import Heart from './Heart';
export interface IconProps {
  color: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

const HomeIcon = ({color = '#000', size = 24, style}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9 22V12H15V22"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const TrackingIcon = ({color = '#000', size = 24, style}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 8V16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8 12H16"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const ProfileIcon = ({color = '#000', size = 24, style}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const CarotLeftIcon = ({color = '#000', size = 24, style}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" style={style}>
    <Path
      d="M15 18L9 12L15 6"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

const Icons = {
  Home: HomeIcon,
  Record: TrackingIcon,
  Profile: ProfileIcon,
  Email: EmailIcon,
  Google: GoogleIcon,
  Apple: AppleIcon,
  CarotLeft: CarotLeftIcon,
  Person: Person,
  Search: Search,
  Comment: Comment,
  Heart: Heart,
};

export interface RunPlusSvgProps {
  name: keyof typeof Icons;
  color: string;
  size: number;
  style?: StyleProp<ViewStyle>;
}

const RunPlusSvg = ({name, color, size, style}: RunPlusSvgProps) => {
  const IconComponent = Icons[name];
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
      }}>
      {IconComponent && (
        <IconComponent color={color} size={size} style={style} />
      )}
    </View>
  );
};

export default RunPlusSvg;
