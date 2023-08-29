import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe('ProfileStatus component', () => {
   test('status from props sholud be in the state', () => {
      const component = create(<ProfileStatus status='nibba' />)
      const instance = component.getInstance();
      expect(instance.state.status).toBe('nibba')
   });
});

describe('ProfileStatus component 2', () => {
   test('there should be span', () => {
      const component = create(<ProfileStatus status='nibba' />)
      const root = component.root;
      let span = root.findByType('span')
      expect(span).not.toBeNull();
   });
});

describe('ProfileStatus component 3', () => {
   test('there should not be input', () => {
      const component = create(<ProfileStatus status='nibba' />)
      const root = component.root;

      expect(() => {
         let input = root.findByType('input')
      }).toThrow
   });
});

describe('ProfileStatus component 4', () => {
   test('there should be status in the span', () => {
      const component = create(<ProfileStatus status='nibba' />)
      const root = component.root;
      let span = root.findByType('span')
      expect(span.children[0]).toBe('nibba')
   });
});

describe('ProfileStatus component 5', () => {
   test('input should be dipslayed in editMode instead of span', () => {
      const component = create(<ProfileStatus status='nibba' />)
      const root = component.root;
      let span = root.findByType('span');
      span.props.onClick();
      let input = root.findByType('input')
      expect(input.props.value).toBe('nibba');
   });
});

describe('ProfileStatus component 6', () => {
   test('callback should be called', () => {
      const mockCallback = jest.fn();
      const component = create(<ProfileStatus status='nibba' updateStatus={mockCallback} />)
      const instance = component.getInstance();
      instance.deactivateEditMode();
      expect(mockCallback.mock.calls.length).toBe(1);
   });
});