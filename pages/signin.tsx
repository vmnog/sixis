import { useRouter } from 'next/router';
import { useCallback, useState, ChangeEvent } from 'react';
import { FormControl, InputLabel, Select } from '@material-ui/core';

const SignIn: React.FC = () => {
  const router = useRouter();
  const [account, setAccount] = useState<string>();

  const handleSelectOption = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setAccount(event.target.value);
      if (event.target.value === 'user@user.com') {
        return router.push('/');
      }
      if (event.target.value === 'admin@admin.com') {
        return router.push('/posts');
      }
    },
    []
  );

  return (
    <div className="flex flex-col justify-center items-center h-screen w-full">
      <FormControl variant="outlined" className="w-56">
        <InputLabel htmlFor="outlined-age-native-simple">Conta</InputLabel>
        <Select
          native
          value={account}
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            handleSelectOption(event)
          }
          label="Email"
          inputProps={{
            name: 'Email',
            id: 'outlined-age-native-simple',
          }}
        >
          <option aria-label="None" value="" />
          <option value="user@user.com">User</option>
          <option value="admin@admin.com">Admin</option>
        </Select>
      </FormControl>
    </div>
  );
};

export default SignIn;
