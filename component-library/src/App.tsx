import { useState } from 'react';
import { AlertBox } from './Components/AlertBox/AlertBox';
import { UserProfileCard } from './Components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './Components/ProductDisplay/ProductDisplay';

function App() {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState('');

  return (
    <div>
      {showAlert && (
        <AlertBox
          type="success"
          message={message}
          onClose={() => setShowAlert(false)}
        />
      )}

      <UserProfileCard
        user={{
          id: '1',
          name: 'Aubrey Strauss',
          email: 'aubrey.strauss@example.com',
          role: 'Application Analyst',
          avatarUrl: '/avatar.jpg',
        }}
        onEdit={(userId) => {
          setMessage(`Editing user with ID: ${userId}`);
          setShowAlert(true);
        }}
      />

      <ProductDisplay
        product={{
          id: '1',
          name: 'Wireless Earbuds',
          price: 99.99,
          description: 'High-quality wireless earbuds with noise cancellation.',
          imageUrl: '/earbuds.jpg',
          inStock: true,
        }}
        onAddToCart={(productId) => {
          setMessage(`Adding product with ID: ${productId} to cart`);
          setShowAlert(true);
        }}
      />
    </div>
  );
}

export default App;