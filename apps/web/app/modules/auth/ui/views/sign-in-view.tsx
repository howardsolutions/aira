import { SignIn } from '@clerk/nextjs';

function SignInView() {
  return (
    <div>
      <SignIn routing='hash' />
    </div>
  );
}

export default SignInView;
