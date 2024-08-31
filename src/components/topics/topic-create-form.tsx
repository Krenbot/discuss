import {
  Input,
  Button,
  Textarea,
  Popover,
  PopoverTrigger,
  PopoverContent,
} from '@nextui-org/react';

import * as actions from '@/actions';

export default function TopicCreateForm() {
  return (
    <Popover placement="left">
      <PopoverTrigger>
        <Button color="primary">Create A Topic</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form onSubmit={actions.createTopic}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a Topic</h3>
            <Input label="name" labelPlacement="outside" placeholder="name" />
            <Textarea
              label="description"
              labelPlacement="outside"
              placeholder="Describe your topic"
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
