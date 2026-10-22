import { AlertBox } from './Components/AlertBox/AlertBox';
import { UserProfileCard } from './Components/UserProfileCard/UserProfileCard';
import { ProductDisplay } from './Components/ProductDisplay/ProductDisplay';


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
        onEdit={(userId) => alert(`Editing user with ID: ${userId}`)}
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
        onAddToCart={(productId) => alert(`Adding product with ID: ${productId} to cart`)}
      />
    </div>
  );
}

export default App;

