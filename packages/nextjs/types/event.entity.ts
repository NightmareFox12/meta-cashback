export interface ItransferEvent {
  address: `0x${string}`;
  args: {
    from: `0x${string}`;
    to: `0x${string}`;
    value: bigint;
  };
  blockHash: `0x${string}`;
  eventName: string;
  blockNumber: bigint;
}

export interface ItransferEventParsed {
  to: `0x${string}`;
  value: bigint;
  blockHash: `0x${string}`;
}
