export default {
    decks: [
        {
            id: '78fc4543-371b-4361-a0fa-b06034e62383',
            name: 'React',
            cards: [
                {
                    id: 'bc82999b-1918-4480-9fa0-778b7ebc17b9',
                    question: 'What are the building blocks of a React-powered UI?',
                    answer: 'Components',
                },
                {
                    id: 'c6008de7-7d21-4df9-9735-663695043e64',
                    question:
                        'If you wanted to render multiple components at the same level without expanding the DOM, how would you do it?',
                    answer: 'Use <Fragment> or the shorthand <>',
                },
            ],
        },
        {
            id: '22d90dca-dd68-4cd7-8296-8f44de5af079',
            name: 'React Native',
            cards: [
                {
                    id: '8bba7485-75e2-440f-82d1-76c02984be27',
                    question: `Does the styling of React Native work in the same way as React's styling?`,
                    answer: `No, React Native doesn't feature CSS in its default configuration. Rather, it's using a JSS Style Generator.`,
                },
                {
                    id: 'd5291b42-d630-4c63-8fb7-61b43b54e81b',
                    question: 'Can you reuse React components in a React Native application?',
                    answer:
                        'No, since React and React Native use different types of components like <div> (React) and <View> (React Native).',
                },
            ],
        },
    ],
}
