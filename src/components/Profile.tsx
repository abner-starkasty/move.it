import { useContext } from 'react'
import { ChallengesContext } from '../contexts/ChallengesContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/abner-starkasty.png" alt="Avatar do Usuário" title="Avatar do Usuário"/>
      <div>
        <strong>Abner Willys</strong>
        <p>
          <img src="icons/level.svg" alt="Icon seta pra cima indicando Level"/>
          Level {level}
        </p>
      </div>
    </div>
  )
}