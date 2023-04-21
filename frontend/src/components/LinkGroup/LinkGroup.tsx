import React from "react";
import styles from "./LinkGroup.module.css";
import arrow from "../../assets/caretRight.svg";
import homeIcon from "../../assets/home.svg";
import userAdd from "../../assets/userAdd.svg";
import { Session } from "../../model/utils/Session";

interface IProps {}
interface IState {
  linkGroups: LinkGroupType[];
}
interface LinkGroupType {
  label: string;
  links: LinkType[];
}
interface LinkType {
  name: string;
  icon: string;
}

class LinkGroup extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      linkGroups: [
        {
          label: "Navegação",
          links: [
            {
              name: "Dashboard",
              icon: homeIcon,
            },
          ],
        },
        {
          label: "Cadastro",
          links: [
            {
              name: "Cadastro de usuários",
              icon: userAdd,
            },
          ],
        },
      ],
    };
  }
  render() {
    const session = Session()
    switch (session.profile.type) {
      case 1:
        return (
          <div className={styles.linkArea}>
            {this.state.linkGroups.map((linkGroup) => (
              <div className={styles.linkGroup}>
                <label className={styles.linkGroupLabel}>{linkGroup.label}</label>
                {linkGroup.links.map((link) => (
                  <div className={styles.linkBtn}>
                    <img className={styles.linkIcon} src={link.icon} alt="" />
                    <div>{link.name}</div>
                    <img className={styles.linkArrow} src={arrow} alt="arrow" />
                  </div>
                ))}
              </div>
            ))}
          </div>
        );
      default:
        return (
          <div className={styles.linkArea}>
            <div className={styles.linkGroup}>
            <label className={styles.linkGroupLabel}>Navegação</label>
              <div className={styles.linkBtn}>
                <img className={styles.linkIcon} src={homeIcon} alt="" />
                <div>Painel do usuário</div>
                <img className={styles.linkArrow} src={arrow} alt="arrow" />
              </div>
              </div>
          </div>
        );
    } 
  }
}

export default LinkGroup;
