import { Link, useNavigate } from "react-router-dom";
import styles from "./Header.module.scss"
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

export default function Header() {
    const navigate = useNavigate();

    return <header className={styles.header}>
        <span className={styles.logo}>
            <p>SibashstatS</p>
        </span>
        <div className={styles.menuRoot}>
            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className={styles.menuButton}>
                        Events
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className={styles.dropdownContent}
                        sideOffset={5}
                        align="end"
                    >
                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/404")}>
                            All events
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Ongoing
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Archive
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Calendar
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Vrs Invites
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className={styles.menuButton}>
                        Stats
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className={styles.dropdownContent}
                        sideOffset={5}
                        align="end"
                    >
                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/404")}>
                            Stats overview
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Top players
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Top teams
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Maps
                        </DropdownMenu.Item>

                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className={styles.menuButton}>
                        Players
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className={styles.dropdownContent}
                        sideOffset={5}
                        align="end"
                    >
                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/404")}>
                            Players
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Retired Players
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Transfers
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            MVPs
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            EVPs
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Top20
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Hall of Fame
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>

            <DropdownMenu.Root>
                <DropdownMenu.Trigger asChild>
                    <button className={styles.menuButton}>
                        Teams
                    </button>
                </DropdownMenu.Trigger>
                <DropdownMenu.Portal>
                    <DropdownMenu.Content
                        className={styles.dropdownContent}
                        sideOffset={5}
                        align="end"
                    >
                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/404")}>
                            All Teams
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Raiting
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Rosters
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Calendar
                        </DropdownMenu.Item>

                        <DropdownMenu.Item className={styles.dropdownItem} onSelect={() => navigate("/")}>
                            Vrs Invites
                        </DropdownMenu.Item>
                    </DropdownMenu.Content>
                </DropdownMenu.Portal>
            </DropdownMenu.Root>
            <Link className={styles.contactLink} to={"/"}>
                <span>
                    Contact Us
                </span>
            </Link>
        </div>
    </header>
}