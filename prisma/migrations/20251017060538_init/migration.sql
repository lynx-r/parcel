-- CreateTable
CREATE TABLE "fsm_states" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "fsm_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fsm_actions" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "label" TEXT,

    CONSTRAINT "fsm_actions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fsm_transitions" (
    "id" SERIAL NOT NULL,
    "from_state_id" INTEGER NOT NULL,
    "action_id" INTEGER NOT NULL,
    "to_state_id" INTEGER NOT NULL,

    CONSTRAINT "fsm_transitions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fsm_action_logs" (
    "id" SERIAL NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "action_name" TEXT NOT NULL,
    "from_state" TEXT NOT NULL,
    "to_state" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "fsm_action_logs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "fsm_errors_log" (
    "id" SERIAL NOT NULL,
    "error_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "error_message" TEXT NOT NULL,
    "entity_type" TEXT NOT NULL,
    "entity_id" INTEGER NOT NULL,
    "action_name" TEXT NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "fsm_errors_log_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "orders" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "stage_orders" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "stage_orders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trips" (
    "id" SERIAL NOT NULL,
    "status" TEXT NOT NULL,
    "description" TEXT,

    CONSTRAINT "trips_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "fsm_states_name_key" ON "fsm_states"("name");

-- CreateIndex
CREATE UNIQUE INDEX "fsm_actions_name_key" ON "fsm_actions"("name");

-- AddForeignKey
ALTER TABLE "fsm_transitions" ADD CONSTRAINT "fsm_transitions_from_state_id_fkey" FOREIGN KEY ("from_state_id") REFERENCES "fsm_states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fsm_transitions" ADD CONSTRAINT "fsm_transitions_to_state_id_fkey" FOREIGN KEY ("to_state_id") REFERENCES "fsm_states"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "fsm_transitions" ADD CONSTRAINT "fsm_transitions_action_id_fkey" FOREIGN KEY ("action_id") REFERENCES "fsm_actions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
