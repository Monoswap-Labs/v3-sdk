export const FACTORY_ADDRESS = '0x1F98431c8aD98523631AE4a59f267346ea31F984'
export const FACTORY_ADDRESS_BLAST_SEPOLIA = '0xbAB2F66B5B3Be3cC158E3aC1007A8DF0bA5d67F4'
export const FACTORY_ADDRESS_BLAST = '0x48d0F09710794313f33619c95147F34458BF7C3b'

export const ADDRESS_ZERO = '0x0000000000000000000000000000000000000000'

export const POOL_INIT_CODE_HASH = '0xe34f199b19b2b4f47f68442619d555527d244f78a3297ea89325f843f87b8b54'
export const POOL_INIT_CODE_HASH_BLAST_SEPOLIA = '0xda571d86ad43edb30b030580c077ec40d48a0a4203fc3d13dc8ebda8e7b46c44'
export const POOL_INIT_CODE_HASH_BLAST = '0x7ea070216c7d9135010a36147394687bab92df4695e924000eed7c4b33eb922f'

/**
 * The default factory enabled fee amounts, denominated in hundredths of bips.
 */
export enum FeeAmount {
  LOWEST = 100,
  LOW = 500,
  MEDIUM = 3000,
  HIGH = 10000
}

/**
 * The default factory tick spacings by fee amount.
 */
export const TICK_SPACINGS: { [amount in FeeAmount]: number } = {
  [FeeAmount.LOWEST]: 1,
  [FeeAmount.LOW]: 10,
  [FeeAmount.MEDIUM]: 60,
  [FeeAmount.HIGH]: 200
}
