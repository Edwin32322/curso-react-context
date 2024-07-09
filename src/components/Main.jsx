/* eslint-disable react/prop-types */
export const Main = ({ theme, text, auth }) => {
    return (
        <main className={theme}>

            {auth ? <p>{text.mainHello}</p> : <p>{text.mainWelcome}</p>}
            <p>{text.mainContent}</p>
        </main>
    )
}
