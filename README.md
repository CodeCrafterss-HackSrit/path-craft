PathCraft is a full-stack web application designed to generate personalized course paths using artificial intelligence. By integrating Next.js, Gemini AI, and the YouTube API, PathCraft creates comprehensive learning experiences that include notes, assignments, and curated video content based on user-defined topics.

## Features

- **AI-Generated Course Content**: Utilizes Gemini AI to generate structured course materials, including notes and assignments, tailored to specific subjects.
- **Curated Video Integration**: Leverages the YouTube API to retrieve and incorporate relevant videos, enhancing the learning experience with multimedia content.
- **User Authentication**: Implements secure user authentication to manage personalized course paths and progress tracking.
- **Responsive Design**: Built with Tailwind CSS to ensure a responsive and intuitive user interface across various devices.


## User Flow Design
- Check out our user experience flow(still working):
- This has some part of intial version ,looking to add more features take it base reference in place of tests consider course content generation.
<img width="5226" alt="user flow design" src="https://github.com/user-attachments/assets/b3c640f6-0cae-4176-b8f2-a347a3396610" />

https://www.figma.com/board/Ya9PNPu4zzRnnTGJQEPUkO/user-flow-design?node-id=0-1&p=f&t=qCavn6oWtxBPQal7-0


## Getting Started

To set up and run PathCraft locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/abshek7/path-craft.git
   cd path-craft
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Configure environment variables**:
   - Create a `.env.local` file in the root directory and add the necessary environment variables, such as API keys for Gemini AI and the YouTube API


4. **Run the development server**:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to access the application.

## Technologies Used

- **Next.js**: Framework for server-rendered React applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Database**: PostgreSQL
- **Gemini AI**: AI model for generating course content.
- **YouTube API**: Retrieves relevant video content based on keywords.
- **Drizzle ORM**: TypeScript ORM for database interactions.
- **Firebase**: Used for image storage.
- **Clerk**: Manages user authentication.



## Future Enhancements & Ideas
- Implement an LLM-powered assignment generator to create customized assignments based on course content.
- Integrate a feedback system to evaluate user progress and improve course recommendations.
- Develop an in-house chatbot to assist users with course-related queries and navigation.
- Utilize user persona analysis to tailor course recommendations based on learning preferences and behavior.
- Implement rag architecture for generating questions from students notes for preparation from their notes of various file forms.
- Prioritize videos with higher engagement (likes and views) when fetching relevant YouTube content.
- Implement transcription and analytics to provide deeper insights into video content and learning patterns.
- Begin with an AI-generated course roadmap and allow users to select the topics they want to include in their course.
- Restrict the LLM from generating any adult (18+) topics to maintain educational integrity.
- Block YouTube searches related to adult (18+) content, ensuring such course paths are automatically abandoned.


## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.If I find the feature or changes useful or optimizing i will definitely accept and we can work on it collaboratively.

## License

This project is licensed under the MIT License.
