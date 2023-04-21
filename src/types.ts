export type TEvent = {
  id: string;
  actor: {
    login: string;
    url: string;
    avatar_url: string;
  };
  type: string | null;
  repo: {
    name: string;
    url: string;
  };
  created_at: string | null;
};

export type TEventItem = {
  actorLogin: string;
  type: string | null;
  repoName: string;
  created_at: string | null;
  actorAvatar: string;
};
