import { Contributor } from "./type";

export const contributorsSocialIconsArray = (participant: Contributor) => [
  {
    key: "github",
    url: participant.github,
    icon: "/participants/github.svg",
  },
  {
    key: "mastodon",
    url: participant.mastodon,
    icon: "/participants/mastodon.svg",
  },
  {
    key: "daramet",
    url: participant.daramet,
    icon: "/participants/daramet.svg",
  },
  {
    key: "telegram",
    url: participant.telegram,
    icon: "/participants/telegram.svg",
  },
];
