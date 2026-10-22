import { AlertBox } from './Components/AlertBox/AlertBox';
import { UserProfileCard } from './Components/UserProfileCard/UserProfileCard';


function App() {
  return (
    <div>
      <AlertBox type="success" message="hi" />

      <UserProfileCard
        user={{
          id: '1',
          name: 'Aubrey Strauss',
          email: 'aubrey.strauss@example.com',
          role: 'Application Analyst',
          avatarUrl: '/avatar.jpg',
        }}
        onEdit={(userId) => console.log(`Editing user with ID: ${userId}`)}
      />
    </div>
  );
}

export default App;

