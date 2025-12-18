import { SignUp } from '@clerk/nextjs';

function SignUpView() {
  return (
    <div>
      <SignUp routing='hash' />
    </div>
  );
}

export default SignUpView;
