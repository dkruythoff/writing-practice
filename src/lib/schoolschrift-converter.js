export default function convert(src) {
  let text = ` ${src} `

  text = replaceApostrophes(text)
  text = replaceCapitals(text)
  text = replaceCapitals(text)
  text = text.replace(/€€€/g, "Y")
  text = text.replace(/ij/g, "\u00FF")
  text = replaceEndings(text)
  text = replacePairs(text)
  text = replacePairs(text)

  return text.trim()
}

function replaceApostrophes(src) {
  let text = src
  const srch = ["m’n", "z’n", "d’r", "’t", "’n", "’ns", "’s", "‘", "“"]
  const repl = ["m·n", "z·n", "d·r", "·t", "·n", "·ns", "·s", " ‚", " „"]
  for (let i = 0; i < srch.length; i++) {
    text = text.split(srch[i]).join(repl[i])
  }
  return text
}

function replaceCapitals(src) {
  let text = src
  const srch = ["(IJ)([a-zà-öù-ÿ])", "(A)([^a-zà-öù-ÿ])", "(B)([^a-zà-öù-ÿ])", "([CÇ])([^a-zà-öù-ÿ])", "(D)([^a-zà-öù-ÿ])", "(E)([^a-zà-öù-ÿ])", "(F)([^a-zà-öù-ÿ])", "(G)([^a-zà-öù-ÿ])", "(H)([^a-zà-öù-ÿ])", "(I)([^a-zà-öù-ÿ])", "(J)([^a-zà-öù-ÿ])", "(K)([^a-zà-öù-ÿ])", "(L)([^a-zà-öù-ÿ])", "(M)([^a-zà-öù-ÿ])", "(N)([^a-zà-öù-ÿ])", "(O)([^a-zà-öù-ÿ])", "(P)([^a-zà-öù-ÿ])", "(Q)([^a-zà-öù-ÿ])", "(R)([^a-zà-öù-ÿ])", "(S)([^a-zà-öù-ÿ])", "(T)([^a-zà-öù-ÿ])", "(U)([^a-zà-öù-ÿ ])", "(V)([^a-zà-öù-ÿ])", "(W)([^a-zà-öù-ÿ])", "(X)([^a-zà-öù-ÿ])", "(Y)([^a-zà-öù-ÿ])", "(Z)([^a-zà-öù-ÿ])"]
  const repl = ["€€€", "А", "В", "С", "Д", "Е", "Ф", "Г", "З", "И", "Ы", "К", "Л", "М", "Н", "О", "Р", "Й", "Я", "Ш", "Т", "П", "Ъ", "Ч", "Щ", "У", "Ь"]
  for (let i = 0; i < srch.length; i++) {
    text = text.replace(new RegExp(srch[i], 'g'), `${repl[i]}$2`)
  }
  return text
}

function replaceEndings(src) {
  let text = src
  const srch = ["([^A-ZÇa-zà-öù-ÿ])([à-äacdgò-öoq])", "([^A-ZÇa-zà-öù-ÿ])([zr])", "([^A-ZÇa-zà-öù-ÿ])([bfhkl])", "([^A-ZÇa-zà-öù-ÿ])([nñmpù-üuyÿvwx])", "([^A-ZÇa-zà-öù-ÿ])([iì-ïj])", "([^A-ZÇa-zà-öù-ÿ])([s])", "([^A-ZÇa-zà-öù-ÿ])([è-ëe])", "([^A-ZÇa-zà-öù-ÿ])([t])", "([à-äadhkmnprù-üuxzAKLMNQRUXZ])([^a-zà-öù-ÿ])", "([bò-öovw])([^a-zà-öù-ÿ])", "([t])([^a-zà-öù-ÿ])", "([f])([^a-zà-öù-ÿ])", "([CEçcè-ëe])([^a-zà-öù-ÿ])", "([gjyÿGJY])([^a-zà-öù-ÿ])", "([lH])([^a-zà-öù-ÿ])", "([q])([^a-zà-öù-ÿ])", "([ì-ïi])([^a-zà-öù-ÿ])"]
  const repl = ["$1ե$2", "$1Ώ$2", "$1ώ$2", "$1ϊ$2", "$1Ϋ$2", "$1ϋ$2", "$1ΐ$2", "$1Ծ$2", "$1Х$2", "$1ь$2", "$1Б$2", "$1Э$2", "$1ѓ$2", "$1џ$2", "$1ё$2", "$1љ$2", "$1Х$2"]
  for (let i = 0; i < srch.length; i++) {
    text = text.replace(new RegExp(srch[i], 'g'), repl[i])
  }
  return text
}

function replacePairs(src) {
  let text = src
  const srch = ["([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([mnñpпrù-üuvwxyÿz])", "([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([à-äaçcdgò-öoq])", "([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([bfhkl])", "([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([t])", "([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([s])", "([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([ì-ïiFj])", "([à-äadhkmnñprù-üuxzAKLMNQRUXZ])([è-ëe])", "([bò-öovw])([mnñpпrù-üuvwxyÿz])", "([bò-öovw])([à-äaçcdgò-öoq])", "([bò-öovw])([bfhkl])", "([bò-öovw])([t])", "([bò-öovw])([s])", "([bò-öovw])([ì-ïiFj])", "([bò-öovw])([è-ëe])", "([t])([mnñpпrù-üuvwxyÿz])", "([t])([à-äaçcdgò-öoq])", "([t])([bfhkl])", "([t])([t])", "([t])([s])", "([t])([ì-ïiFj])", "([t])([è-ëe])", "([f])([mnñpпrù-üuvwxyÿz])", "([f])([à-äaçcdgò-öoq])", "([f])([bfhkl])", "([f])([t])", "([f])([s])", "([f])([ì-ïiFj])", "([f])([è-ëe])", "([çcè-ëe])([mnñpпrù-üuvwxyÿz])", "([çcè-ëe])([à-äaçcdgò-öoq])", "([çcè-ëe])([bfhkl])", "([çcè-ëe])([t])", "([çcè-ëe])([s])", "([çcè-ëe])([ì-ïiFj])", "([çcè-ëe])([è-ëe])", "([gjÿyGJY])([mnñpпrù-üuvwxyÿz])", "([gjÿyGJY])([à-äaçcdgò-öoq])", "([gjÿyGJY])([bfhkl])", "([gjÿyGJY])([t])", "([gjÿyGJY])([s])", "([gjÿyGJY])([ì-ïiFj])", "([gjÿyGJY])([è-ëe])", "([s])([mnñpпrù-üuvwxyÿz])", "([s])([à-äaçcdgò-öoq])", "([s])([bfhkl])", "([s])([t])", "([s])([s])", "([s])([ì-ïiFj])", "([s])([è-ëe])", "([lH])([mnñpпrù-üuvwxyÿz])", "([lH])([à-äaçcdgò-öoq])", "([lH])([bfhkl])", "([lH])([t])", "([lH])([s])", "([lH])([ì-ïiFj])", "([lH])([è-ëe])", "([q])([mnñpпrù-üuvwxyÿz])", "([q])([à-äaçcdgò-öoq])", "([q])([bfhkl])", "([q])([t])", "([q])([s])", "([q])([ì-ïiFj])", "([q])([è-ëe])", "([BDOSVW])([mnñpпrù-üuvwxyÿz])", "([BDOSVW])([à-äaçcdgò-öoq])", "([BDOSVW])([bfhkl])", "([BDOSVW])([t])", "([BDOSVW])([s])", "([BDOSVW])([ì-ïiFj])", "([BDOSVW])([è-ëe])", "([FIT])([mnñpпrù-üuvwxyÿz])", "([FIT])([à-äaçcdgò-öoq])", "([FIT])([bfhkl])", "([FIT])([t])", "([FIT])([s])", "([FIT])([ì-ïiFj])", "([FIT])([è-ëe])", "([P])([mnñpпrù-üuvwxyÿz])", "([P])([à-äaçcdgò-öoq])", "([P])([bfhkl])", "([P])([t])", "([P])([s])", "([P])([ì-ïiFj])", "([P])([è-ëe])", "([CÇE])([mnñpпrù-üuvwxyÿz])", "([CÇE])([à-äaçcdgò-öoq])", "([CÇE])([bfhkl])", "([CÇE])([t])", "([CÇE])([s])", "([CÇE])([ì-ïiFj])", "([CÇE])([è-ëe])", "([ì-ïiF])([mnñpпrù-üuvwxyÿz])", "([ì-ïiF])([à-äaçcdgò-öoq])", "([ì-ïiF])([bfhkl])", "([ì-ïiF])([t])", "([ì-ïiF])([s])", "([ì-ïiF])([ì-ïiFj])", "([ì-ïiF])([eè-ë])"]
  const repl = ["Α", "Β", "Γ", "Բ", "Δ", "Ε", "Ζ", "ф", "ы", "я", "Կ", "л", "м", "н", "Θ", "Ι", "Κ", "Դ", "Λ", "Μ", "Ν", "а", "в", "г", "Ձ", "д", "ш", "щ", "Ο", "Π", "Ρ", "Զ", "Σ", "Τ", "Υ", "Χ", "Ψ", "Ω", "Է", "Ά", "Έ", "Ή", "Ό", "Ύ", "α", "Ա", "β", "γ", "δ", "ζ", "η", "θ", "Գ", "ι", "κ", "λ", "ν", "ξ", "ο", "Ե", "ρ", "σ", "τ", "υ", "φ", "χ", "Ի", "ψ", "ω", "ς", "Η", "Ξ", "Φ", "Լ", "Ί", "ε", "μ", "Ё", "Ѓ", "Ѕ", "Խ", "Љ", "Њ", "Ж", "ά", "έ", "ή", "Ժ", "ί", "ό", "ύ", "Ц", "ж", "б", "Ը", "ќ", "њ", "э"]
  for (let i = 0; i < srch.length; i++) {
    text = text.replace(new RegExp(srch[i], 'g'), `$1${repl[i]}$2`)
  }
  return text
}