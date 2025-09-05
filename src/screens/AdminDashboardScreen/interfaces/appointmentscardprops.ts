import { AppointmentStatus } from "../utils/statusHelpers";
import { Appointment } from "./apontiments";

export interface AppointmentCardProps {
  appointment: Appointment;
  onStatusUpdate: (id: string, status: AppointmentStatus) => Promise<void>;
}