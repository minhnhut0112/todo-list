import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import clsx from 'clsx'

import { CreateTodoForm } from '@/client/components/CreateTodoForm'
import { TodoList } from '@/client/components/TodoList'
/**
 * QUESTION 6:
 * -----------
 * Implement quick filter/tab feature so that we can quickly find todos with
 * different statuses ("pending", "completed", or both). The UI should look like
 * the design on Figma.
 *
 * NOTE:
 *  - For this question, you must use RadixUI Tabs component. Its Documentation
 *  is linked below.
 *
 * Documentation references:
 *  - https://www.radix-ui.com/docs/primitives/components/tabs
 */

const Index = () => {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('all')

  const handleValueChange = (value: string) => {
    setFilter(value as 'all' | 'pending' | 'completed')
  }

  return (
    <main className="mx-auto w-[480px] pt-12">
      <div className="rounded-12 bg-white p-8 shadow-sm">
        <h1 className="text-center text-4xl font-extrabold text-gray-900">
          Todo App
        </h1>

        <Tabs.Root value={filter} onValueChange={handleValueChange}>
          <Tabs.List
            aria-label="Filter todos"
            className="mb-10 mt-10 flex gap-2"
          >
            <Tabs.Trigger
              value="all"
              className={clsx(
                'h-[44px] w-[66px] rounded-full border border-gray-200 font-bold text-gray-700',
                filter === 'all' && 'border-none bg-gray-700 text-white'
              )}
            >
              All
            </Tabs.Trigger>
            <Tabs.Trigger
              value="pending"
              className={clsx(
                'h-[44px] w-[104px] rounded-full border border-gray-200 font-bold text-gray-700',
                filter === 'pending' && 'border-none bg-gray-700 text-white'
              )}
            >
              Pending
            </Tabs.Trigger>
            <Tabs.Trigger
              value="completed"
              className={clsx(
                'h-[44px] w-[124px] rounded-full border border-gray-200 font-bold text-gray-700',
                filter === 'completed' && 'border-none bg-gray-700 text-white'
              )}
            >
              Completed
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="all">
            <TodoList filter="all" />
          </Tabs.Content>
          <Tabs.Content value="pending">
            <TodoList filter="pending" />
          </Tabs.Content>
          <Tabs.Content value="completed">
            <TodoList filter="completed" />
          </Tabs.Content>
        </Tabs.Root>

        <div className="pt-10">
          <CreateTodoForm />
        </div>
      </div>
    </main>
  )
}

export default Index
