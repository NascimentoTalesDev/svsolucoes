export default function formatCharacterLimit(limit: number, text: string) {
    const LIMIT = limit
    const ABOVLIMIT = text?.length > LIMIT
    const DOTSOREMPTY = ABOVLIMIT ? '...' : " "
    const TEXTFORMATED = text?.substring(0, LIMIT) + DOTSOREMPTY
    
    return TEXTFORMATED
}