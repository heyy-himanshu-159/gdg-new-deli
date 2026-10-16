import { Product, LookbookItem, JournalArticle, CartItem } from '../types';

export const ATELIER_LOGO_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCpofdqpAjq7CCyt_a1ekQoJcFCQXyAysEkcF75Z0sm9JUkghOJOqQb31grkL-ZC1hh4RTUgZ-vZWLLMlbWYU3wzDJY8wVsqo4PXEW86hXG-TyNhs08mgQAqa9M44ELvuY_jz6dQL_p3_m5VErYg1jxAxBQrvP_srm4BzB7Em2TWexlTumVoR8ijFXV5BXEBbxUd6jlB2Reh4suxdO9XgfSmTKvlQFXjHpfQH1Vw2tm7Nl3Vuw5O2d3';

export const PROFILE_AVATAR_URL =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuB8ts6gjTpAYtow7HvO8PeBMXVzl6HDfg06uWHfYOeOa2YK8gozX2Bq8A-TRBezUPhIBFRGV9kM0cCIB4ed8jonctqR8gfS3VibG_IBegK37MNK4HqLXzqgbYqA0SU5vR_7NJts_e0hrl_x6SZ_f65wdpIRmMhQwV-BEm6ABgXLndpYBfVBVtSD6_VkOoQSarM-L4-fLaoVVXEba1iE97EO1zQgjVetyOFQHo1wu4kuJA9lyi_Mav-J';

export const HERO_BANNER_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuCluxirqpwZYg8IgcXeZlU1sb4GmnkgDF4w90R5VOe_UaBVICCLXuhRvYafHVRffPFqCLLKGLzhz2uCDeawqZOXqq8FVlmfjWs8CVmbbdM2Iz8r-8Az80cs42nQ1ToURAVYnkdr2t3HkRpbtVSb2Jz0ruLUExN4WyO1HjeEWr0KUqUq2Rya00wQaaG9gkpzj8e-fYi_8kVqg5ZhFWzphz1yKQpqg9J782ZN7QSkQ0jcJ3GOB77hG90t';

export const LOOKBOOK_LOOKS: LookbookItem[] = [
  {
    id: 'look-01',
    lookNumber: 'LOOK 01',
    title: 'Cashmere Knitwear',
    subtitle: 'Grade-A Mongolian Yarns',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxAf_1ZsVOxilA6tH7BZkN4gc9z0XU6F7rao_vpoaiYGITfyYjGaqPwgPGCiK8fNBwZX9GUtrsqAWyu6WGPiXvLsuPpggDmnhhMm3k-bjnhu_s7D2v6D8BQSY_i_gnavc5BCkcH6UcwphozWBSKnHEjoIKCNBSweZn5S6M-wSujF_MkB74hIsF6T2BZUVuBun1hLBmhNxbcfMYKgXwoar5OkkFllkub3oJe_sMgjfBhD2aD0rHjd7A',
    altText:
      'Editorial look of a sculpted heavy cashmere knit sweater in chalk ivory shade, draped over a minimalist mannequin against a sand plaster background, dramatic soft natural light.',
    category: 'knitwear',
    description:
      'Hand-loomed in the Piedmont valleys using ultra-fine 15.2-micron unbleached cashmere fibers. Built with tensioned ribbing to maintain structural loft over decades of wear.',
  },
  {
    id: 'look-02',
    lookNumber: 'LOOK 02',
    title: 'Tailored Suiting',
    subtitle: 'Fluid Architectural Lines',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj5-NUac5hGlGfMEnH5cuf4Nm-5qDhLq-HO0HX215ZLoksQbht9iWnkOqGflwcjt4zderpeFNcN-Mb3LZBzZjC6W0h8LeTwagFnZI6bgaSb9J-7Tz0sEQO6J3Min79CKhR7B6LtIfVXWdPooeOGT-IcQQumsWZ_eZksu6AWx_XfY91MnGO76f9i6N0dSZQL4iULU0XDCt8Ipj_RnkSwKZaodRZ2Yl8DN1wZauIwSS4HeHP4VNkekLJ',
    altText:
      'High-fashion close-up of tailored charcoal double-breasted coat crafted from dense matte double-faced wool, sculptural sharp shoulders, clean seams, studio lighting in warm earthy tones.',
    category: 'outerwear',
    description:
      'Unstructured shoulders meet razor-precise internal canvas construction. Sculpted from 480gsm double-faced wool cloth woven exclusively in Biella.',
  },
  {
    id: 'look-03',
    lookNumber: 'LOOK 03',
    title: 'Sculptural Footwear',
    subtitle: 'Vegetable-Tanned Leathers',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwKeicCBztOs8NfHGjhXfkc6Z47vElpAcX6Jkli7YbtAlXPsJxckMTu0IHK7fylvKZBfn4xDOEWOTPxsomSpzjaRtsVQN8sAPeq5tc4L5J20FpegZbJX6K3dCBZaHOn2ixfUNgc_fzVcNZXTqSX7QTcx6ueBN_f0Yq8IIvpe6LT5MCajS1eMD7zsbkWB90oKJNt2fmOO6VZNintzyAEfPAyPAr_EHS1w5XyVvkA5px3RbJstHIO-Ot',
    altText:
      'Minimalist still life of sculptural square-toe leather boots in deep espresso calfskin resting on a polished travertine pedestal, natural soft ambient shadows.',
    category: 'accessories',
    description:
      'Slow-tanned in Tuscan oak pits over sixty days. Features a hand-beveled leather sole and hand-pegged wooden shank for anatomic balance.',
  },
  {
    id: 'look-04',
    lookNumber: 'LOOK 04',
    title: 'Leather Objects',
    subtitle: 'Hand-Burnished Finishes',
    image:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwUZTSeUvpn6D0PiSdjP9FbdRudSP_m8DzxplMtiSeaa2YK1xZR3Mww6s3CQLHb1JiJeZ9dyE2lKExl4I6QRHNF8a4kswRwNdzYZ0IocqElktjc9GcU8_KiU88PzaMHlXLjMHCe3N5cWfDoeQvIEf0rzC0usGQz6eWLE7kcsgCi1wq5d6i4gQl8emNp6v-n6gydwy-olnvgBQWHzPdNoYDjcKDSoZTcbv4azS-VZKvk9IHBDSLJR9p',
    altText:
      'Modern artisanal leather pouch bag in warm raw umber leather placed next to an open sketchbook on an oak table, morning angled light.',
    category: 'accessories',
    description:
      'Origami-inspired folding technique requiring minimal hardware. Each crease is burnished by hand using beeswax and bone folders.',
  },
];

export const PRODUCTS: Product[] = [
  {
    id: 'prod-cocoon-coat',
    name: 'The Sculpted Cocoon Coat',
    subtitle: 'Double-Faced Wool · Natural Bone Horn',
    price: 620,
    category: 'outerwear',
    editionBadge: 'Archival Cut',
    badgeType: 'archival',
    lowStock: true,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzGkJuVVkLB7Mzl_wnhmtkd8m0WCyCAgUcXhKmrhVWjyP3KubjI-HNhtoiqgxynhEdlULIg1xLvulGGocadWyZwIBWeEMEASC22mgqgJAtlx-6-YkBukq2QKLUUq0av3hYDiOOGbmGfaeor7upbX_KZXJQ0cFm0GCqM4Z6opR9_QemBlPKD6fqKKwaLt4D1n2Ega8RI_E07ZV4g0SPCZwrR9m_H2PCPMmu7zGbb13ZXCN0yZf7Mru6',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj5-NUac5hGlGfMEnH5cuf4Nm-5qDhLq-HO0HX215ZLoksQbht9iWnkOqGflwcjt4zderpeFNcN-Mb3LZBzZjC6W0h8LeTwagFnZI6bgaSb9J-7Tz0sEQO6J3Min79CKhR7B6LtIfVXWdPooeOGT-IcQQumsWZ_eZksu6AWx_XfY91MnGO76f9i6N0dSZQL4iULU0XDCt8Ipj_RnkSwKZaodRZ2Yl8DN1wZauIwSS4HeHP4VNkekLJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCluxirqpwZYg8IgcXeZlU1sb4GmnkgDF4w90R5VOe_UaBVICCLXuhRvYafHVRffPFqCLLKGLzhz2uCDeawqZOXqq8FVlmfjWs8CVmbbdM2Iz8r-8Az80cs42nQ1ToURAVYnkdr2t3HkRpbtVSb2Jz0ruLUExN4WyO1HjeEWr0KUqUq2Rya00wQaaG9gkpzj8e-fYi_8kVqg5ZhFWzphz1yKQpqg9J782ZN7QSkQ0jcJ3GOB77hG90t',
    ],
    altText:
      'Full body shot of a model wearing an unlined structured raw wool wrap coat in warm limestone grey, subtle tactile twill weave, minimal styling, gallery room background.',
    shades: [
      { name: 'Basalt Charcoal', hex: '#3d3d3a' },
      { name: 'Limestone Sand', hex: '#d5cebe' },
    ],
    shadesLabel: '2 Shades',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Architectural cocoon silhouette crafted from unlined, double-faced virgin wool. The garment is finished with raw hand-stitched split seams, allowing the wool to drape organically with no stiff interfacings. Features carved natural buffalo horn buttons and a self-tie architectural sash.',
    composition: '100% Virgin Merino Wool (480 g/m²)',
    origin: 'Biella, Northern Italy',
    artisanMill: 'Lanificio Zegna Heritage Archives',
    editionTotal: 120,
  },
  {
    id: 'prod-tunic-trousers',
    name: 'Pleated Tunic Trousers',
    subtitle: 'Organic Silk Voile · Relaxed Silhouette',
    price: 380,
    category: 'trousers',
    editionBadge: 'Bestseller',
    badgeType: 'bestseller',
    lowStock: false,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCkKnmgfEBnkmxBZO2S7H2MWTyqQNjNpVGgmhj9Uvf3Qfyw2Nr84zIm0B4hQ6bFecNOMIobUSJtEoWO3olVZOpI1oQOrWA6JZlSJ3A98z1HofmKMQS_mer2qoELCQkf-08k5mGbLKf7eoxUqxcVWDjS-3tiJ7jTxHUZB2oVI0GhtIojCtiGn55FZHmmIPV4BDd8SCX0WXQhz2kBhKtH4Z2ufwdypuR_b7gwa27632_HymwOed0PdMGh',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxAf_1ZsVOxilA6tH7BZkN4gc9z0XU6F7rao_vpoaiYGITfyYjGaqPwgPGCiK8fNBwZX9GUtrsqAWyu6WGPiXvLsuPpggDmnhhMm3k-bjnhu_s7D2v6D8BQSY_i_gnavc5BCkcH6UcwphozWBSKnHEjoIKCNBSweZn5S6M-wSujF_MkB74hIsF6T2BZUVuBun1hLBmhNxbcfMYKgXwoar5OkkFllkub3oJe_sMgjfBhD2aD0rHjd7A',
    ],
    altText:
      'Editorial close shot of sheer drape silk shirt in natural pearl white with raw mother of pearl buttons, soft natural daylight illuminating the fluid fabric weave.',
    shades: [
      { name: 'Chalk Silk', hex: '#eae7df' },
      { name: 'Carbon Black', hex: '#1c1b1b' },
    ],
    shadesLabel: '2 Shades',
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    description:
      'Cut with generous forward deep knife pleats that cascade into a fluid, wide-leg hem. Woven from slow-reeled raw mulberry silk voile that holds structural volume while breathing weightlessly against the skin. Discrete internal waistband tab.',
    composition: '100% GOTS Certified Mulberry Silk Voile (18 momme)',
    origin: 'Como, Lombardy',
    artisanMill: 'Tessitura Mantero Archives',
    editionTotal: 95,
  },
  {
    id: 'prod-leather-envelope',
    name: 'Folded Leather Envelope',
    subtitle: 'Full Grain Calf · Raw Waxed Thread',
    price: 240,
    category: 'accessories',
    editionBadge: 'Numbered Edition',
    badgeType: 'numbered',
    lowStock: true,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB-ue-4tcE7doz5I-iisYqsrZyxSPXuKXQq4WnhVGpv2vanS2-dJJOcX8Eo4F38Lb9NQ8JUknRp4tT0cH8ZU_9an6A1kSTztz2eJ_IFK23D7eUzn92UtOFnjt8D1FNMeOjgTUowRArOTaALtRQwIappR46EBpkSr2XpUcFGHhbqi_xZ1-bHvTqJg3BcCkRbI9okbgd383TjgesOAgpkYGWLgjHUmTUUE0Rxo-2tsoLmSBL0iEHAPWAi',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwUZTSeUvpn6D0PiSdjP9FbdRudSP_m8DzxplMtiSeaa2YK1xZR3Mww6s3CQLHb1JiJeZ9dyE2lKExl4I6QRHNF8a4kswRwNdzYZ0IocqElktjc9GcU8_KiU88PzaMHlXLjMHCe3N5cWfDoeQvIEf0rzC0usGQz6eWLE7kcsgCi1wq5d6i4gQl8emNp6v-n6gydwy-olnvgBQWHzPdNoYDjcKDSoZTcbv4azS-VZKvk9IHBDSLJR9p',
    ],
    altText:
      'Monochrome styled flatlay of minimalist tactile lambskin folded clutch bag in matte stone ecru tone, soft shadow gradation on concrete surface.',
    shades: [
      { name: 'Burnt Sienna', hex: '#8c4e36' },
      { name: 'Noir Matte', hex: '#1c1b1b' },
    ],
    shadesLabel: 'Monochrome',
    sizes: ['One Size (28 × 18 cm)'],
    description:
      'A seamless origami clutch formed from a singular piece of full-grain French calfskin. Folded geometrically without metal rivets or zipper pulls, secured by a quiet magnetic closure and raw waxed saddle stitch along stress points.',
    composition: '100% Full-Grain Vegetable-Tanned Calfskin, Linen Thread',
    origin: 'Santa Croce sull’Arno, Tuscany',
    artisanMill: 'Conceria Tempesti 1946',
    editionTotal: 80,
  },
  {
    id: 'prod-cashmere-knit',
    name: 'The Architectural Rib Sweater',
    subtitle: 'Grade-A Mongolian Cashmere · Raglan Sleeve',
    price: 490,
    category: 'knitwear',
    editionBadge: 'Archival Cut',
    badgeType: 'archival',
    lowStock: false,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBxAf_1ZsVOxilA6tH7BZkN4gc9z0XU6F7rao_vpoaiYGITfyYjGaqPwgPGCiK8fNBwZX9GUtrsqAWyu6WGPiXvLsuPpggDmnhhMm3k-bjnhu_s7D2v6D8BQSY_i_gnavc5BCkcH6UcwphozWBSKnHEjoIKCNBSweZn5S6M-wSujF_MkB74hIsF6T2BZUVuBun1hLBmhNxbcfMYKgXwoar5OkkFllkub3oJe_sMgjfBhD2aD0rHjd7A',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCluxirqpwZYg8IgcXeZlU1sb4GmnkgDF4w90R5VOe_UaBVICCLXuhRvYafHVRffPFqCLLKGLzhz2uCDeawqZOXqq8FVlmfjWs8CVmbbdM2Iz8r-8Az80cs42nQ1ToURAVYnkdr2t3HkRpbtVSb2Jz0ruLUExN4WyO1HjeEWr0KUqUq2Rya00wQaaG9gkpzj8e-fYi_8kVqg5ZhFWzphz1yKQpqg9J782ZN7QSkQ0jcJ3GOB77hG90t',
    ],
    altText: 'Sculpted chunky knit cashmere pullover in natural cream ivory.',
    shades: [
      { name: 'Oatmeal Natural', hex: '#d5cebe' },
      { name: 'Charcoal Black', hex: '#2f312f' },
    ],
    shadesLabel: '2 Shades',
    sizes: ['XS', 'S', 'M', 'L'],
    description:
      'Seamlessly 3D-knitted on whole-garment looms to eradicate internal bulk. The high mock-collar rolls naturally without rib tension, framing the jawline with sculptural ease.',
    composition: '100% Grade-A Mongolian Cashmere (7-Gauge 4-Ply)',
    origin: 'Biella, Italy',
    artisanMill: 'Cariaggi Fine Yarns',
    editionTotal: 100,
  },
  {
    id: 'prod-sculpted-boot',
    name: 'Square-Toe Travertine Boot',
    subtitle: 'Calfskin Upper · Hand-Pegged Wooden Shank',
    price: 520,
    category: 'accessories',
    editionBadge: 'Low Stock',
    badgeType: 'low_stock',
    lowStock: true,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCwKeicCBztOs8NfHGjhXfkc6Z47vElpAcX6Jkli7YbtAlXPsJxckMTu0IHK7fylvKZBfn4xDOEWOTPxsomSpzjaRtsVQN8sAPeq5tc4L5J20FpegZbJX6K3dCBZaHOn2ixfUNgc_fzVcNZXTqSX7QTcx6ueBN_f0Yq8IIvpe6LT5MCajS1eMD7zsbkWB90oKJNt2fmOO6VZNintzyAEfPAyPAr_EHS1w5XyVvkA5px3RbJstHIO-Ot',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBwUZTSeUvpn6D0PiSdjP9FbdRudSP_m8DzxplMtiSeaa2YK1xZR3Mww6s3CQLHb1JiJeZ9dyE2lKExl4I6QRHNF8a4kswRwNdzYZ0IocqElktjc9GcU8_KiU88PzaMHlXLjMHCe3N5cWfDoeQvIEf0rzC0usGQz6eWLE7kcsgCi1wq5d6i4gQl8emNp6v-n6gydwy-olnvgBQWHzPdNoYDjcKDSoZTcbv4azS-VZKvk9IHBDSLJR9p',
    ],
    altText: 'Sculptural square-toe leather boots in deep espresso calfskin.',
    shades: [
      { name: 'Espresso Calf', hex: '#31221c' },
      { name: 'Raw Umber', hex: '#8c4e36' },
    ],
    shadesLabel: '2 Shades',
    sizes: ['EU 37', 'EU 38', 'EU 39', 'EU 40', 'EU 41'],
    description:
      'Constructed on a custom chisel-toe wooden last. The leather is soaked in natural botanical oils for seventy-two hours, yielding an supple hand that molds anatomically to the wearer’s stride.',
    composition: 'Full-Grain French Calfskin, Stacked Leather Heel, Brass Zip',
    origin: 'Civitanova Marche, Italy',
    artisanMill: 'Laboratorio Calzaturiero Marchigiano',
    editionTotal: 65,
  },
  {
    id: 'prod-blazer-suiting',
    name: 'Unstructured Double-Breasted Jacket',
    subtitle: '480gsm Biella Wool · Horn Buttons',
    price: 580,
    category: 'outerwear',
    editionBadge: 'Numbered Edition',
    badgeType: 'numbered',
    lowStock: false,
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDj5-NUac5hGlGfMEnH5cuf4Nm-5qDhLq-HO0HX215ZLoksQbht9iWnkOqGflwcjt4zderpeFNcN-Mb3LZBzZjC6W0h8LeTwagFnZI6bgaSb9J-7Tz0sEQO6J3Min79CKhR7B6LtIfVXWdPooeOGT-IcQQumsWZ_eZksu6AWx_XfY91MnGO76f9i6N0dSZQL4iULU0XDCt8Ipj_RnkSwKZaodRZ2Yl8DN1wZauIwSS4HeHP4VNkekLJ',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAzGkJuVVkLB7Mzl_wnhmtkd8m0WCyCAgUcXhKmrhVWjyP3KubjI-HNhtoiqgxynhEdlULIg1xLvulGGocadWyZwIBWeEMEASC22mgqgJAtlx-6-YkBukq2QKLUUq0av3hYDiOOGbmGfaeor7upbX_KZXJQ0cFm0GCqM4Z6opR9_QemBlPKD6fqKKwaLt4D1n2Ega8RI_E07ZV4g0SPCZwrR9m_H2PCPMmu7zGbb13ZXCN0yZf7Mru6',
    ],
    altText: 'Tailored double-breasted coat in matte wool.',
    shades: [
      { name: 'Charcoal Mélange', hex: '#3d3d3a' },
      { name: 'Deep Espresso', hex: '#271f1a' },
    ],
    shadesLabel: '2 Shades',
    sizes: ['S', 'M', 'L', 'XL'],
    description:
      'Discarding pad-stiffened shoulders for a natural, slope-line silhouette. Built with hand-basted floating canvas in horsehair and wool, allowing natural chest mold.',
    composition: '100% Superfine Tasmanian Merino Wool',
    origin: 'Biella, Italy',
    artisanMill: 'Vitale Barberis Canonico',
    editionTotal: 85,
  },
];

export const JOURNAL_ARTICLE: JournalArticle = {
  id: 'gazette-vol-14',
  volume: 'ATELIER GAZETTE · VOL. 14',
  readTime: '6 Min Read',
  title: 'The Geometry of Warmth: Building Coats Without Seams',
  snippet:
    'An inside interview with Head Patternmaker Geneviève Roux on the structural engineering behind the Autumn release.',
  author: 'Geneviève Roux & Julian Vance',
  authorRole: 'Head Patternmaker, Atelier Paris',
  coverImage:
    'https://lh3.googleusercontent.com/aida-public/AB6AXuC7O8-sI_yCxfjmXUsUJIqPoLRexWFBav0TADViMvtCFlP5gowMDmBZeBeOF0oBzptpql__7O2w1WXdlgTnuifTLs9jR9w_jh22BmC0jXvK0HkyyKz6XcsHv8sJCfAmMl4NObpMMCkyCWhWFzJ1qk7D35XxyTVl6ZVLmFKrDexvR0Vq1NPYpOpqnPKyKiKEB1AtpNw9i5dyjIvowgmcpJ8lY2MtQYGeczYy_-a356LZ-fqA2e7dY2nU',
  publishedDate: 'Autumn Equinox · 2026',
  quote:
    'When you eliminate decorative stitches, the fiber has no choice but to speak honestly. Either the drape is pure architecture, or it falls flat.',
  fullText: [
    'Inside the light-flooded third-floor cutting room overlooking Rue Saint-Maur, bolts of undyed charcoal double-faced wool rest upon bleached ash tables. There are no computer monitors humming here, nor laser cutters hissing through artificial substrates. Head Patternmaker Geneviève Roux strokes the raw selvedge with calloused thumbs.',
    '“Modern commercial tailoring relies on fusible interfacings—chemical adhesives that stiffen cloth artificially,” Geneviève explains, drawing a chalk line along the natural bias of the fabric. “We rejected that ten years ago. If a coat requires glue to look structured, the cloth is weak. When we cut The Sculpted Cocoon Coat, we split the dual layers of double-faced wool by hand along the perimeter, roll the edges inward by three millimeters, and catch-stitch them invisibly with raw silk thread.”',
    'This technique, known as ‘cucito a mano’ in Northern Italy, requires five hours of manual needlework per individual garment. The result is an outerwear piece that moves like a liquid second skin yet holds an architectural presence reminiscent of Brâncuși sculptures.',
    'For Edition 09, our team spent seven months visiting high-altitude sheep cooperatives across the Piedmont valleys. We chose fleeces sheared exclusively in early spring, when the fibers carry maximum natural crimp and lanolin elasticity. Untreated with harsh caustic acid baths, the wool preserves its natural weather-resistant armor and subtle lanolin scent.',
    '“True luxury is not about excess ornamentation,” smiles Geneviève. “It is about having the discipline to stop cutting before the garment loses its soul.”',
  ],
};

// Initial cart items (2 items as shown on the header badge)
export const INITIAL_CART_ITEMS: CartItem[] = [
  {
    id: 'cart-1',
    product: PRODUCTS[0], // Cocoon coat
    selectedShade: PRODUCTS[0].shades[0],
    selectedSize: 'S',
    quantity: 1,
  },
  {
    id: 'cart-2',
    product: PRODUCTS[2], // Leather Envelope
    selectedShade: PRODUCTS[2].shades[0],
    selectedSize: 'One Size (28 × 18 cm)',
    quantity: 1,
  },
];
