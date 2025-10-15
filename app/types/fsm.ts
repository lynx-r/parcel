export interface FsmState {
  id: number
  name: string
  label: string
}

export interface FsmAction {
  id: number
  name: string
  label: string
}

export interface FsmTransition {
  id: number
  from_state_id: number
  action_id: number
  to_state_id: number
}

export interface FsmActionLog {
  id: number
  entity_type: 'order' | 'stage_order' | 'trip'
  entity_id: number
  action_name: string
  from_state: string
  to_state: string
  result: string
  role: string
  user_id: number
  created_at: string
}

export interface FsmError {
  id: number
  error_time: string
  error_message: string
  entity_type: 'order' | 'stage_order' | 'trip'
  entity_id: number
  action_name: string
  user_id: number
}

export interface Order {
  id: number
  status: string
  description: string
}

export interface StageOrder {
  id: number
  status: string
  description: string
}

export interface Trip {
  id: number
  status: string
  description: string
}

export interface ParcelLocker {
  id: number
  address: string
  cells: Cell[]
}

export interface Cell {
  id: number
  locker_id: number
  size: 'S' | 'M' | 'L'
  number: string
  status: 'free' | 'occupied' | 'repair'
}

export interface Test {
  id: number
  name: string
  status: 'success' | 'error' | 'in_progress'
  progress: string
  type: 'normal' | 'fsm'
  description: string
  json_data: any
}
