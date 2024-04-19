import styles from './Avatar.module.css';

// Ou posso usar o desestructuring nas props já que é um objeto.
// Nesse caso de uso defino o valor default como true
export function Avatar({hasBorder = true, src}) {
  /**
   * Essa é uma forma de resolver o problema de aplicar ou não a borda
   *   const hasBorder = props.hasBorder != false;
   */



  return (
      <img
        className={hasBorder? styles.avatarWithBorder : styles.avatar }
        src={src} />
  )
}
