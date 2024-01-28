import { container } from 'tsyringe';
import { useStore } from 'usestore-ts';
import OrderStore from '../src/stores/Store';

export default function useOrderStore() {
  // CounterStore 쓸거
  const store = container.resolve(OrderStore);

  // Return useObjectStore<CounterStore>(store);
  return useStore(store);
}
