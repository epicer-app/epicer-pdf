import { Router, Request, Response } from 'express';

import yipt from 'yipt';
import * as PDFKit from 'pdfkit';

const router: Router = Router();

router.post('/', (req: Request, res: Response) => {
    res.setHeader('Content-disposition', 'attachment; filename="test.pdf"');
    res.setHeader('Content-type', 'application/pdf');

    const doc = new PDFKit();
    doc.pipe(res);

    yipt.render(doc, 'templates/recipe.yml', req.body.recipe).then(() => {
        doc.end();
    }).catch(() => {
        let a = 0;
        ++a;
    });
});

export const PDFMakerController: Router = router;