import type {
  FsmAction,
  FsmActionLog,
  FsmError,
  FsmState,
  FsmTransition,
  Order,
  ParcelLocker,
  StageOrder,
  Test,
  Trip,
} from '~/types/fsm'

export const useMockData = () => {
  const fsmStates: FsmState[] = [
    { id: 1, name: 'created', label: 'Created' },
    { id: 2, name: 'reserved', label: 'Reserved' },
    { id: 3, name: 'assigned', label: 'Assigned' },
    { id: 4, name: 'in_progress', label: 'In Progress' },
    { id: 5, name: 'completed', label: 'Completed' },
    { id: 6, name: 'cancelled', label: 'Cancelled' },
  ]

  const fsmActions: FsmAction[] = [
    { id: 1, name: 'reserve_cell', label: 'Reserve Cell' },
    { id: 2, name: 'assign_courier', label: 'Assign Courier' },
    { id: 3, name: 'pickup_from_cell', label: 'Pickup from Cell' },
    { id: 4, name: 'confirm_delivery', label: 'Confirm Delivery' },
    { id: 5, name: 'place_in_cell', label: 'Place in Cell' },
    { id: 6, name: 'cancel_order', label: 'Cancel Order' },
  ]

  const fsmTransitions: FsmTransition[] = [
    { id: 1, from_state_id: 1, action_id: 1, to_state_id: 2 }, // created -> reserve_cell -> reserved
    { id: 2, from_state_id: 2, action_id: 2, to_state_id: 3 }, // reserved -> assign_courier -> assigned
    { id: 3, from_state_id: 3, action_id: 5, to_state_id: 4 }, // assigned -> place_in_cell -> in_progress
    { id: 4, from_state_id: 4, action_id: 3, to_state_id: 5 }, // in_progress -> pickup_from_cell -> completed
    { id: 5, from_state_id: 1, action_id: 6, to_state_id: 6 }, // created -> cancel_order -> cancelled
    { id: 6, from_state_id: 2, action_id: 6, to_state_id: 6 }, // reserved -> cancel_order -> cancelled
  ]

  const orders: Order[] = [
    { id: 1, status: 'created', description: 'Package from Store A' },
    { id: 2, status: 'reserved', description: 'Package from Store B' },
    { id: 3, status: 'in_progress', description: 'Package from Store C' },
    { id: 4, status: 'completed', description: 'Package from Store D' },
    { id: 5, status: 'assigned', description: 'Package from Store E' },
  ]

  const stageOrders: StageOrder[] = [
    { id: 1, status: 'created', description: 'Stage order batch 1' },
    { id: 2, status: 'in_progress', description: 'Stage order batch 2' },
    { id: 3, status: 'completed', description: 'Stage order batch 3' },
    { id: 4, status: 'assigned', description: 'Stage order batch 4' },
    { id: 5, status: 'reserved', description: 'Stage order batch 5' },
  ]

  const trips: Trip[] = [
    { id: 1, status: 'created', description: 'Trip to District A' },
    { id: 2, status: 'in_progress', description: 'Trip to District B' },
    { id: 3, status: 'completed', description: 'Trip to District C' },
    { id: 4, status: 'assigned', description: 'Trip to District D' },
    { id: 5, status: 'reserved', description: 'Trip to District E' },
  ]

  const parcelLockers: ParcelLocker[] = [
    {
      id: 1,
      address: '123 Main St, City Center',
      cells: [
        { id: 1, locker_id: 1, size: 'S', number: '1A', status: 'free' },
        { id: 2, locker_id: 1, size: 'M', number: '1B', status: 'occupied' },
      ],
    },
    {
      id: 2,
      address: '456 Oak Ave, North District',
      cells: [
        { id: 3, locker_id: 2, size: 'L', number: '2A', status: 'free' },
        { id: 4, locker_id: 2, size: 'S', number: '2B', status: 'repair' },
      ],
    },
    {
      id: 3,
      address: '789 Pine Rd, South District',
      cells: [
        { id: 5, locker_id: 3, size: 'M', number: '3A', status: 'occupied' },
        { id: 6, locker_id: 3, size: 'L', number: '3B', status: 'free' },
      ],
    },
    {
      id: 4,
      address: '321 Elm St, East District',
      cells: [
        { id: 7, locker_id: 4, size: 'S', number: '4A', status: 'free' },
        { id: 8, locker_id: 4, size: 'M', number: '4B', status: 'occupied' },
      ],
    },
    {
      id: 5,
      address: '654 Maple Dr, West District',
      cells: [
        { id: 9, locker_id: 5, size: 'L', number: '5A', status: 'repair' },
        { id: 10, locker_id: 5, size: 'S', number: '5B', status: 'free' },
      ],
    },
  ]

  const tests: Test[] = [
    {
      id: 1,
      name: 'Client creates order',
      status: 'success',
      progress: '5/5',
      type: 'normal',
      description: 'Test client order creation flow',
      json_data: { action: 'create_order', user_id: 1 },
    },
    {
      id: 2,
      name: 'Courier pickup flow',
      status: 'in_progress',
      progress: '3/5',
      type: 'normal',
      description: 'Test courier pickup process',
      json_data: { action: 'pickup', courier_id: 10 },
    },
    {
      id: 3,
      name: 'FSM: reserve_cell on order',
      status: 'success',
      progress: '1/1',
      type: 'fsm',
      description: 'Test FSM reserve cell transition',
      json_data: {
        entity_type: 'order',
        entity_id: 1,
        action_name: 'reserve_cell',
      },
    },
    {
      id: 4,
      name: 'FSM: pickup_from_cell',
      status: 'error',
      progress: '0/1',
      type: 'fsm',
      description: 'Test FSM pickup from cell',
      json_data: {
        entity_type: 'order',
        entity_id: 2,
        action_name: 'pickup_from_cell',
      },
    },
    {
      id: 5,
      name: 'FSM: assign_courier on trip',
      status: 'success',
      progress: '1/1',
      type: 'fsm',
      description: 'Test FSM courier assignment',
      json_data: {
        entity_type: 'trip',
        entity_id: 1,
        action_name: 'assign_courier',
      },
    },
  ]

  const actionLogs: FsmActionLog[] = [
    {
      id: 1,
      entity_type: 'order',
      entity_id: 1,
      action_name: 'reserve_cell',
      from_state: 'created',
      to_state: 'reserved',
      user_id: 100,
      created_at: '2025-01-15T10:00:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 2,
      entity_type: 'order',
      entity_id: 1,
      action_name: 'assign_courier',
      from_state: 'reserved',
      to_state: 'assigned',
      user_id: 101,
      created_at: '2025-01-15T10:15:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 3,
      entity_type: 'order',
      entity_id: 2,
      action_name: 'reserve_cell',
      from_state: 'created',
      to_state: 'reserved',
      user_id: 100,
      created_at: '2025-01-15T10:30:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 4,
      entity_type: 'trip',
      entity_id: 1,
      action_name: 'assign_courier',
      from_state: 'created',
      to_state: 'assigned',
      user_id: 102,
      created_at: '2025-01-15T11:00:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 5,
      entity_type: 'order',
      entity_id: 3,
      action_name: 'place_in_cell',
      from_state: 'assigned',
      to_state: 'in_progress',
      user_id: 103,
      created_at: '2025-01-15T11:30:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 6,
      entity_type: 'order',
      entity_id: 4,
      action_name: 'pickup_from_cell',
      from_state: 'in_progress',
      to_state: 'completed',
      user_id: 104,
      created_at: '2025-01-15T12:00:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 7,
      entity_type: 'stage_order',
      entity_id: 1,
      action_name: 'reserve_cell',
      from_state: 'created',
      to_state: 'reserved',
      user_id: 100,
      created_at: '2025-01-15T12:30:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 8,
      entity_type: 'stage_order',
      entity_id: 2,
      action_name: 'assign_courier',
      from_state: 'reserved',
      to_state: 'assigned',
      user_id: 101,
      created_at: '2025-01-15T13:00:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 9,
      entity_type: 'trip',
      entity_id: 2,
      action_name: 'place_in_cell',
      from_state: 'assigned',
      to_state: 'in_progress',
      user_id: 103,
      created_at: '2025-01-15T13:30:00Z',
      result: 'OK',
      role: 'client',
    },
    {
      id: 10,
      entity_type: 'order',
      entity_id: 5,
      action_name: 'assign_courier',
      from_state: 'reserved',
      to_state: 'assigned',
      user_id: 101,
      created_at: '2025-01-15T14:00:00Z',
      result: 'OK',
      role: 'client',
    },
  ]

  const errorLogs: FsmError[] = [
    {
      id: 1,
      error_time: '2025-01-15T10:05:00Z',
      error_message: 'Invalid state transition',
      entity_type: 'order',
      entity_id: 1,
      action_name: 'pickup_from_cell',
      user_id: 100,
    },
    {
      id: 2,
      error_time: '2025-01-15T11:20:00Z',
      error_message: 'Cell not available',
      entity_type: 'order',
      entity_id: 2,
      action_name: 'place_in_cell',
      user_id: 103,
    },
    {
      id: 3,
      error_time: '2025-01-15T12:45:00Z',
      error_message: 'Courier not assigned',
      entity_type: 'trip',
      entity_id: 1,
      action_name: 'place_in_cell',
      user_id: 103,
    },
    {
      id: 4,
      error_time: '2025-01-15T13:15:00Z',
      error_message: 'Order already completed',
      entity_type: 'order',
      entity_id: 4,
      action_name: 'assign_courier',
      user_id: 101,
    },
    {
      id: 5,
      error_time: '2025-01-15T14:30:00Z',
      error_message: 'Invalid entity type',
      entity_type: 'stage_order',
      entity_id: 3,
      action_name: 'cancel_order',
      user_id: 100,
    },
  ]

  return {
    fsmStates,
    fsmActions,
    fsmTransitions,
    orders,
    stageOrders,
    trips,
    parcelLockers,
    tests,
    actionLogs,
    errorLogs,
  }
}
