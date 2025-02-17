import { entityBase } from "./entityBase";
import { money } from "./money";
import { transaction } from "./transaction";
import { conversionRate } from "./conversionRate";

export namespace instantConversion {
    import TransactionStatus = transaction.TransactionStatus;
    import TransactionType = transaction.TransactionType;
    import TransactionNature = transaction.TransactionNature;
    import MoneyData = money.MoneyData;
    import ConversionRateData = conversionRate.ConversionRateData;

    interface InstantConversionData extends entityBase.EntityBaseData {
        /**
         * The unique identifier of the user at the source of the transaction
         */
        AuthorId: string;

        /**
         * The unique identifier of the debited wallet.
         */
        DebitedWalletId: string;

        /**
         * The unique identifier of the credited wallet
         */
        CreditedWalletId: string;

        /**
         * The sell funds
         */
        DebitedFunds: MoneyData;

        /**
         * The buy funds
         */
        CreditedFunds: MoneyData;

        /**
         * Real time indicative market rate of a specific currency pair
         */
        ConversionRate: ConversionRateData;

        /**
         * The status of the transaction.
         */
        Status: TransactionStatus;

        /**
         * The type of transaction
         */
        Type: TransactionType;

        /**
         * The nature of the transaction, providing more
         * information about the context in which the transaction occurred
         */
        Nature: TransactionNature;

        /**
         * The code indicates the result of the operation.
         * This information is mostly used to handle errors or for filtering purposes.
         */
        ResultCode: string;

        /**
         * The explanation of the result code.
         */
        ResultMessage: string;

        /**
         * The date and time at which the status changed to SUCCEEDED,
         * indicating that the transaction occurred.
         * The statuses CREATED and FAILED return an ExecutionDate of null
         */
        ExecutionDate: number;
    }

    interface CreateInstantConversion {
        /**
         * The unique identifier of the user at the source of the transaction.
         */
        AuthorId: string;

        /**
         * The unique identifier of the debited wallet.
         */
        DebitedWalletId: string;

        /**
         * The unique identifier of the credited wallet
         */
        CreditedWalletId: string;

        /**
         * The sell funds
         */
        DebitedFunds: MoneyData;

        /**
         * The buy funds
         */
        CreditedFunds: MoneyData;
    }
}
