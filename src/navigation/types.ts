import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TEventItem} from '../types';

export enum ROUTER_NAMES {
  MAIN_SCREEN = 'MAIN_SCREEN',
  DETAILS_SCREEN = 'DETAILS_SCREEN',
}

export type EventItemNavigationProp = NativeStackNavigationProp<
  {DETAILS_SCREEN: TEventItem},
  ROUTER_NAMES.DETAILS_SCREEN
>;

export type ParamList = {
  Details: TEventItem;
};
