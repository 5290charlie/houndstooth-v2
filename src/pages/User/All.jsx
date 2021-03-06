import React from 'react';
import { WithApp, WithGithubAuth, WithGithubRepo, WithJekyll, WithGithubRepoUsers } from '../../ecosystems';
import { UserList } from '../../organisms';

export const UserAllPage = ({ children, ...props }) => {
  return (
    <WithGithubAuth {...props}>
      <WithGithubRepo>
        <WithJekyll>
          <WithGithubRepoUsers>
            <WithApp>
              <UserList />
            </WithApp>
          </WithGithubRepoUsers>
        </WithJekyll>
      </WithGithubRepo>
    </WithGithubAuth>
  );
};
