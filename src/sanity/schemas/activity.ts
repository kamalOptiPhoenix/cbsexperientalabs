import { defineField, defineType } from 'sanity'

export const activitySchema = defineType({
  name: 'activity',
  title: 'Activity',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Activity Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ageGroup',
      title: 'Age Group',
      type: 'string',
      options: {
        list: [
          { title: 'Nursery & KG (Ages 3–5)', value: 'nursery' },
          { title: 'Class 1–2 (Ages 6–7)', value: 'class1' },
          { title: 'Class 3–4 (Ages 8–9)', value: 'class3' },
          { title: 'Class 5 (Ages 10–11)', value: 'class5' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'skill',
      title: 'Skill Developed',
      description: 'e.g. "Critical Thinking & Observation"',
      type: 'string',
    }),
    defineField({
      name: 'time',
      title: 'Time Required',
      description: 'e.g. "20–30 minutes"',
      type: 'string',
    }),
    defineField({
      name: 'what',
      title: 'What to Do',
      description: 'Step-by-step description of the activity',
      type: 'text',
      rows: 5,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'materials',
      title: 'Materials Needed',
      description: 'e.g. "A notebook, pen, and one newspaper"',
      type: 'string',
    }),
    defineField({
      name: 'connection',
      title: 'Real-World Connection',
      description: 'How does this connect to everyday learning?',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'questions',
      title: 'Discussion Questions',
      description: 'Questions to ask the child after the activity',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'backgroundImage',
      title: 'Background Image',
      description: 'Upload a photo for this activity card',
      type: 'image',
      options: { hotspot: true },
      fields: [
        {
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          description: 'Describe the image for accessibility',
        },
      ],
    }),
    defineField({
      name: 'videoLink',
      title: 'Instagram or YouTube Video Link',
      description: 'Paste a full URL — e.g. https://www.youtube.com/watch?v=...',
      type: 'url',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      description: 'Lower number = shown first. Use 1, 2, 3...',
      type: 'number',
      initialValue: 99,
    }),
    defineField({
      name: 'published',
      title: 'Published',
      description: 'Toggle ON to show this activity on the website',
      type: 'boolean',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      ageGroup: 'ageGroup',
      media: 'backgroundImage',
      published: 'published',
    },
    prepare({ title, ageGroup, media, published }) {
      const groups: Record<string, string> = {
        nursery: 'Nursery & KG',
        class1: 'Class 1–2',
        class3: 'Class 3–4',
        class5: 'Class 5',
      }
      return {
        title: title ?? 'Untitled Activity',
        subtitle: `${groups[ageGroup] ?? ageGroup} · ${published ? '✅ Published' : '⏸ Draft'}`,
        media,
      }
    },
  },
  orderings: [
    { title: 'Age Group', name: 'ageGroupAsc', by: [{ field: 'ageGroup', direction: 'asc' }, { field: 'order', direction: 'asc' }] },
    { title: 'Display Order', name: 'orderAsc', by: [{ field: 'order', direction: 'asc' }] },
  ],
})
