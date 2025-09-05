import { TabType } from "../components/TabNavigation";

export interface Tab {
  id: TabType;
  label: string;
  icon: string;
  iconType?: string;
}